// const solution = (m, n, board) => {
//     let result = 0
//     let new_board = board.map(v => [...v]);
//     const areAllEqual = (i,j) => {
//         if (new_board[i][j] === '?') return false
//         return new_board[i][j] === new_board[i][j+1] && new_board[i][j+1] === new_board[i+1][j] && new_board[i+1][j] === new_board[i+1][j+1] ? true : false
//     };
    
    
//     const get_remove_target = () => {
//         const remove_target_list = [];
        
//         for(let i=0;i<m-1;i++){
//             for(let j=0;j<n-1;j++){
//                 if(areAllEqual(i,j)) {
//                     remove_target_list.push(i+' '+j)
//                     remove_target_list.push(i+' '+(j+1))
//                     remove_target_list.push((i+1)+' '+j)
//                     remove_target_list.push((i+1)+' '+(j+1))
//                 }
//             }
//         }
        
//         return remove_target_list
//     }

//     while(true){
//         const unique_list = new Set(get_remove_target().sort())
        
//         if(!unique_list.size) break
//         result += unique_list.size
        
//         unique_list.forEach((target) => {
//             const [y,x] = target.split(' ').map(Number)

//             if(y>0 && y-1 !== '?') {
//                 let tmp_y = y
                
//                 while(tmp_y){
//                     new_board[tmp_y][x] = new_board[tmp_y-1][x]
//                     new_board[tmp_y-1][x] = '?' 
//                     tmp_y--
//                 }

//             } else {
//                 new_board[y][x] = '?'
//             }
//         })   
//         //console.log(new_board)
//     }    
    
//     return result
// }
    

function solution(m, n, board) {
    let curBoard = [...board.map(block => [...block])].concat();
    let newBoard = [...board.map(block => [...block])].concat();

    while (true) { 
        let count = 0;
        for (let x = 0; x < m - 1; x++) {
            for (let y = 0; y < n - 1; y++) {
                if (curBoard[x][y] === '') continue;
                if (curBoard[x][y] === curBoard[x][y + 1] && curBoard[x][y] === curBoard[x + 1][y] && curBoard[x][y] === curBoard[x + 1][y + 1]) {
                    newBoard[x][y] = '';
                    newBoard[x + 1][y] = '';
                    newBoard[x][y + 1] = '';
                    newBoard[x + 1][y + 1] = '';
                    count += 1;
                }
            }
        }

        for (let x = 0; x < m - 1; x++) {
            for (let y = 0; y < n; y++) {
                if (newBoard[x + 1][y] === '') {
                    for (let i = x; i >= 0; i--) {
                        newBoard[i + 1][y] = newBoard[i][y];
                        newBoard[i][y] = '';
                    }
                }
            }
        }
        curBoard = [...newBoard.map(block => [...block])].concat();
        if (count === 0) break;
    }

    const allBoards = newBoard.reduce((acc, cur) => acc.concat(cur));
    return allBoards.filter(block => block === '').length;
}

