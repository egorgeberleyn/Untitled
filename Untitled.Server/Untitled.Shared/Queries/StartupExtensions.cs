using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using Untitled.Shared.Abstractions.Commands;
using Untitled.Shared.Abstractions.Queries;
using Untitled.Shared.Commands;

namespace Untitled.Shared.Queries;

public static class StartupExtensions
{
    public static IServiceCollection AddQueries(this IServiceCollection services)
    {
        var assembly = Assembly.GetCallingAssembly();

        services.AddSingleton<IQueryDispatcher, InMemoryQueryDispatcher>();
        services
            .Scan(s => s.FromAssemblies(assembly)
                .AddClasses(c => c.AssignableTo(typeof(IQueryHandler<,>)))
                .AsImplementedInterfaces()
                .WithScopedLifetime());
        return services;
    }
}