using backend_dotnet7.Core.Dtos.Log;
using System.Security.Claims;

namespace backend_dotnet7.Core.Interfaces
{
    public interface ILogService
    {
        Task SaveNewLog(string UserName, string Description);
        Task<IEnumerable<GetLogDto>> GetLogsAsync();
        Task<IEnumerable<GetLogDto>> GetMyLogsAsync(ClaimsPrincipal User);

    }
}
