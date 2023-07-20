using System;

public class Example
{
    public static void Main()
    {
        String s;

        Console.Clear();
        s = Console.ReadLine();
        
        char[] charArray = s.ToCharArray();
        String result = "";
            
        foreach (char c in charArray) {
            if (char.IsUpper(c)) {
                result += Char.ToLower(c);
            }
            else {
                result += Char.ToUpper(c);
            }
        }
        
        Console.Write(result);
    }
}