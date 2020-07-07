using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productRepository;
        private readonly IGenericRepository<ProductBrand> _brandsRepository;
        private readonly IGenericRepository<ProductType> _typesRepository;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productRepository, IGenericRepository<ProductBrand> brandsRepository,
            IGenericRepository<ProductType> typesRepository, IMapper mapper)
        {
            _mapper = mapper;
            _typesRepository = typesRepository;
            _brandsRepository = brandsRepository;
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDTO>>> GetProducts()
        {
            var spec = new ProductsWithTypesAndBrandsSpecification();
            var products = await _productRepository.ListAsync(spec);

            return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDTO>>(products));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDTO>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _productRepository.GetEntityWithSpec(spec);
            return _mapper.Map<Product, ProductToReturnDTO>(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetBrands()
        {
            var brands = await _brandsRepository.ListAllAsync();
            return Ok(brands);
        }

        [HttpGet("types")]
        public async Task<ActionResult<List<ProductBrand>>> GetTypes()
        {
            var types = await _typesRepository.ListAllAsync();
            return Ok(types);
        }
    }
}