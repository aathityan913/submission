using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BankCustomerApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateonAllRecords : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserRole",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropIndex(
                name: "IX_UserRole_UserID",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "UserRoleID",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "RoleName",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "UserName",
                schema: "training",
                table: "UserRole");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserRole",
                schema: "training",
                table: "UserRole",
                columns: new[] { "UserID", "RoleID" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserRole",
                schema: "training",
                table: "UserRole");

            migrationBuilder.AddColumn<int>(
                name: "UserRoleID",
                schema: "training",
                table: "UserRole",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                schema: "training",
                table: "UserRole",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                schema: "training",
                table: "UserRole",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                schema: "training",
                table: "UserRole",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                schema: "training",
                table: "UserRole",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RoleName",
                schema: "training",
                table: "UserRole",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                schema: "training",
                table: "UserRole",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserRole",
                schema: "training",
                table: "UserRole",
                column: "UserRoleID");

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_UserID",
                schema: "training",
                table: "UserRole",
                column: "UserID");
        }
    }
}
