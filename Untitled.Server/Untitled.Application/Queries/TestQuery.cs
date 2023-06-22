using Untitled.Shared.Abstractions.Queries;

namespace Untitled.Application.Queries;

public class TestQuery : IQuery<string>
{
    public Guid Id { get; set; }
}