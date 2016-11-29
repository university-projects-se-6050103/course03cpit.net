FROM microsoft/aspnetcore:1.0.1

WORKDIR /dotnetapp
COPY out .
COPY db.db materials.db

EXPOSE 5000

ENTRYPOINT ["dotnet", "apartment-renovation-cost.dll"]
