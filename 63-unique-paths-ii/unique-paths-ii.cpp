class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {

        int row = obstacleGrid.size();
        int col = obstacleGrid[0].size();

        vector<vector<long long>> dp(row, vector<long long>(col, 0));

        bool lionSeenLastCol = false;

        for(int i=row-1;i>=0;i--){

            //1.Is there lion in cell?
            //2.Is there any lion in my path ahead

            if(obstacleGrid[i][col-1]==0 and lionSeenLastCol==false)
            {
                dp[i][col-1]=1;
            }else{
                lionSeenLastCol=true;
                dp[i][col-1]=0;
            }
        }

        bool lionSeenLastRow = false;

        for(int j=col-1;j>=0;j--){

            //1.Is there lion in cell?
            //2.Is there any lion in my path ahead

            if(obstacleGrid[row-1][j]==0 and lionSeenLastRow==false)
            {
                dp[row-1][j]=1;
            }else{
                lionSeenLastRow=true;
                dp[row-1][j]=0;
            }
        }

        for(int r=row-2;r>=0;r--){
            for(int c=col-2;c>=0;c--){
                if(obstacleGrid[r][c]!=1){
                    long long waysFromRight=dp[r][c+1];
                    long long waysFromDown=dp[r+1][c];

                    dp[r][c]=waysFromRight+waysFromDown;
                }
            }
        }

        return dp[0][0];
    }
};