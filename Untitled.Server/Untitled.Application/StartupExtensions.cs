using Microsoft.Extensions.DependencyInjection;

namespace Untitled.Application;

public static class StartupExtensions
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        return services;
    }
}