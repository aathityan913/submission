using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BankCustomerApi.Migrations
{
    /// <inheritdoc />
    public partial class AddedAuthorization1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserRole_User_UserID1",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropIndex(
                name: "IX_UserRole_UserID1",
                schema: "training",
                table: "UserRole");

            migrationBuilder.DropColumn(
                name: "UserID1",
                schema: "training",
                table: "UserRole");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserID1",
                schema: "training",
                table: "UserRole",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_UserID1",
                schema: "training",
                table: "UserRole",
                column: "UserID1");

            migrationBuilder.AddForeignKey(
                name: "FK_UserRole_User_UserID1",
                schema: "training",
                table: "UserRole",
                column: "UserID1",
                principalSchema: "training",
                principalTable: "User",
                principalColumn: "UserID");
        }
    }
}
