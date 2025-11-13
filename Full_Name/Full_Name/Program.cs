using System;

class Program
{
    static void Main()
    {
        try
        {
            // Ask for first name
            Console.Write("Enter First Name: ");
            string firstName = Console.ReadLine();

            // Ask for middle name (optional)
            Console.Write("Enter Middle Name (press Enter if none): ");
            string middleName = Console.ReadLine();

            // Ask for last name (optional)
            Console.Write("Enter Last Name (press Enter if none): ");
            string lastName = Console.ReadLine();

            // Validate first name
            if (string.IsNullOrWhiteSpace(firstName))
            {
                throw new ArgumentException("First name is required!");
            }

            // Build full name dynamically
            string fullName = firstName;

            if (!string.IsNullOrWhiteSpace(middleName))
            {
                fullName += " " + middleName;
            }

            if (!string.IsNullOrWhiteSpace(lastName))
            {
                fullName += " " + lastName;
            }

            // Print the full name
            Console.WriteLine("Full Name: " + fullName);
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine("Input Error: " + ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine("Unexpected Error: " + ex.Message);
        }

        Console.WriteLine("Press any key to exit...");
        Console.ReadKey();
    }
}
