using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodePulse.API.Migrations.AuthDb
{
    /// <inheritdoc />
    public partial class Authadmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "Email", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "064c5a49-0abd-4494-8f42-1cc8d8d10b61", "admin@gmail.com", "ADMIN@GMAIL.COM", "ADMIN@GMAIL.COM", "AQAAAAIAAYagAAAAEDKFXRJpBJvko4EThr4Ex32IdTUafsBaAtfD+cMjCprmLn7L31A7CsA6CaR/DtxlBQ==", "0f34edc7-8da9-4f40-9058-8f021a569bae", "admin@gmail.com" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "edc267ec-d43c-4e3b-8108-a1a1f819906d",
                columns: new[] { "ConcurrencyStamp", "Email", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "36133d24-05e9-47a7-92e7-26a3a04657c0", "admin@codepulse.com", "ADMIN@CODEPULSE.COM", "ADMIN@CODEPULSE.COM", "AQAAAAIAAYagAAAAEFFugz4+/jgC5expBuZd0vaXRKHu8AQ7CVNbM+H1sHeylsaLv2GJzpByC5lk785NFQ==", "17a80c1d-54b0-4a38-836d-07d816449916", "admin@codepulse.com" });
        }
    }
}
