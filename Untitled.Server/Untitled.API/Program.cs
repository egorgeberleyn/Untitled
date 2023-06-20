using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Untitled.API;
using Untitled.Application;
using Untitled.Infrastructure;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services
        .AddPresentation()
        .AddApplication()
        .AddInfrastructure(builder.Configuration);
}

var app = builder.Build();
var provider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();
{
    app.UseSwagger();
    app.UseSwaggerUI(config =>
    {
        foreach (var description in provider.ApiVersionDescriptions)
        {
            config.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json",
                description.GroupName.ToUpperInvariant());
        }
    });


    app.UseHttpsRedirection();
    app.UseApiVersioning();

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();

    app.Run();
}