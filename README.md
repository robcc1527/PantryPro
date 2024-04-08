# PantryPro

## Setting up the database

### Commands

| Syntax                          | Description                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| -p --project \<PROJECT>         | Relative path to the project folder of the target project. Default value is the current folder.  |
| -s --startup-project \<PROJECT> | Relative path to the project folder of the startup project. Default value is the current folder. |

Install EntityFramework for DotNet

```bash
dotnet tool install --global dotnet-ef --version 8.0.3
```

Initiate the migation

```bash
dotnet ef migrations add InitialCreate -p PantryPro.Server -s PantryPro.Server --output-dir Migrations --context PantryProAppContext
```

Apply migration

`````bash
dotnet ef database update -p PantryPro.Server -s PantryPro.Server````
`````
