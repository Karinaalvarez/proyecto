using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProyectoCalculadora.Models;

namespace ProyectoCalculadora.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Calculadora()
    {
        return View();
    }

    public IActionResult Graficador()
    {
        return View();
    }

    public IActionResult Derivadas()
    {
        return View();
    }

    public IActionResult Integrales()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
