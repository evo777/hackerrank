class Student extends Person{
  private int[] testScores;

    Student(String firstName, String lastName, int identification, int[] testScores)
    {
        super(firstName, lastName, identification);
        this.testScores = testScores;
    }

    public char calculate()
    {
        int sum = 0;
        for(int i=0; i<this.testScores.length; i++)
        {
            sum = sum + this.testScores[i];
        }
        char grade;
        int avg = sum / this.testScores.length;
        if(avg<40)
        {
            grade = 'T';
        }
        else if(avg<55)
        {
            grade = 'D';
        }
        else if(avg<70)
        {
            grade = 'P';
        }
        else if(avg<80)
        {
            grade = 'A';
        }
        else if(avg<90)
        {
            grade = 'E';
        }
        else
        {
            grade = 'O';
        }
        return grade;
    }

}