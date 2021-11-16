@Controller("/imoveis")
class EstateController(val repository: EstateRepository) {
    // Lista todos os imóveis disponíveis
    @Get()
    @Secured(SecurityRule.IS_ANONYMOUS)
    fun list(): HttpResponse<ArrayList<Estate>> {
        val list = repository.findAll()
        return HttpResponse.ok<ArrayList<Estate>>(list as ArrayList<Estate>?)
    }
    // Cadastra novos imóveis
    @Post()
    @Secured(value = ["ROLE_ADMIN", "ROLE_CORRETOR"])
    fun create(@Body createRequest: CreateRequest): HttpResponse<CreateResponse> {
        val estate = createRequest.toModel()
        repository.save(estate)
        val response = CreateResponse(estate.address)
        return HttpResponse.created(response)
    }
    // Remove do banco os imóveis
    @Delete("/{id}")
    @Secured(value = ["ROLE_ADMIN", "ROLE_CORRETOR"])
    fun delete(@PathVariable id: Long): HttpResponse<Map<String, String>> {
        repository.deleteById(id)
        return HttpResponse.ok()
    }
}