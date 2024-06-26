function bfs(){
    let visit = JSON.parse(JSON.stringify(mp));
    let dir = JSON.parse(JSON.stringify(mp));
    for(let i=0; i<dir.length; i++){
        dir[i].fill(0);
    }

    let queue = new Queue();
    queue.push([start_r, start_c]);

    timer = setInterval(()=>{

        if(queue.isEmpty()){
            clearInterval(timer);
            unlock();
            reset_req = true;
            return;
        }

        let v = queue.front();
        queue.pop();

        if(visit[v[0]][v[1]] == 1){
            if(v[0]+1 >= 0 && v[0]+1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]+1][v[1]] > 1){
                queue.push([v[0]+1, v[1]]);
                visit[v[0]+1][v[1]] = 0;
                dir[v[0]+1][v[1]] = 0;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]+1 >= 0 && v[1]+1 <= COLS && visit[v[0]][v[1]+1] > 1){
                queue.push([v[0], v[1]+1]);
                visit[v[0]][v[1]+1] = 0;
                dir[v[0]][v[1]+1] = 1;
            }
            if(v[0]-1 >= 0 && v[0]-1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]-1][v[1]] > 1){
                queue.push([v[0]-1, v[1]]);
                visit[v[0]-1][v[1]] = 0;
                dir[v[0]-1][v[1]] = 2;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]-1 >= 0 && v[1]-1 <= COLS && visit[v[0]][v[1]-1] > 1){
                queue.push([v[0], v[1]-1]);
                visit[v[0]][v[1]-1] = 0;
                dir[v[0]][v[1]-1] = 3;
            }
            visit[v[0]][v[1]] = 0;
        }
        else if(v[0] == destination_r && v[1] == destination_c){
            clearInterval(timer);

            let cr = v[0];
            let cc = v[1];
            timer = setInterval(()=>{
                if(mp[cr][cc] == 1){
                    unlock();
                    clearInterval(timer);
                    return;
                }

                if(mp[cr][cc] != 2) mp[cr][cc] = 5;
                if(dir[cr][cc] == 0) cr--;
                else if(dir[cr][cc] == 1) cc--;
                else if(dir[cr][cc] == 2) cr++;      
                else if(dir[cr][cc] == 3) cc++;

            }, 30)
            mp[v[0]][v[1]] = 2;
            reset_req = true;
            return;
        }
        else if(visit[v[0]][v[1]] == 0){
            visit[v[0]][v[1]] = 0;
            mp[v[0]][v[1]] = 4;

            if(v[0]+1 >= 0 && v[0]+1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]+1][v[1]] > 1){
                queue.push([v[0]+1, v[1]]);
                visit[v[0]+1][v[1]] = 0;
                dir[v[0]+1][v[1]] = 0;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]+1 >= 0 && v[1]+1 <= COLS && visit[v[0]][v[1]+1] > 1){
                queue.push([v[0], v[1]+1]);
                visit[v[0]][v[1]+1] = 0;
                dir[v[0]][v[1]+1] = 1;
            }
            if(v[0]-1 >= 0 && v[0]-1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]-1][v[1]] > 1){
                queue.push([v[0]-1, v[1]]);
                visit[v[0]-1][v[1]] = 0;
                dir[v[0]-1][v[1]] = 2;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]-1 >= 0 && v[1]-1 <= COLS && visit[v[0]][v[1]-1] > 1){
                queue.push([v[0], v[1]-1]);
                visit[v[0]][v[1]-1] = 0;
                dir[v[0]][v[1]-1] = 3;
            }
        }
    }, 1);
}

function dfs(){
    let visit = JSON.parse(JSON.stringify(mp));
    let dir = JSON.parse(JSON.stringify(mp));
    for(let i=0; i<dir.length; i++){
        dir[i].fill(0);
    }

    let stack = new Stack();
    stack.push([start_r, start_c]);

    timer = setInterval(()=>{
        if(stack.isEmpty()){
            clearInterval(timer);
            unlock();
            reset_req = true;
            return;
        }

        let v = stack.top();
        stack.pop();

        if(visit[v[0]][v[1]] == 1){
            if(v[0]+1 >= 0 && v[0]+1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]+1][v[1]] > 1){
                stack.push([v[0]+1, v[1]]);
                visit[v[0]+1][v[1]] = 0;
                dir[v[0]+1][v[1]] = 0;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]+1 >= 0 && v[1]+1 <= COLS && visit[v[0]][v[1]+1] > 1){
                stack.push([v[0], v[1]+1]);
                visit[v[0]][v[1]+1] = 0;
                dir[v[0]][v[1]+1] = 1;
            }
            if(v[0]-1 >= 0 && v[0]-1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]-1][v[1]] > 1){
                stack.push([v[0]-1, v[1]]);
                visit[v[0]-1][v[1]] = 0;
                dir[v[0]-1][v[1]] = 2;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]-1 >= 0 && v[1]-1 <= COLS && visit[v[0]][v[1]-1] > 1){
                stack.push([v[0], v[1]-1]);
                visit[v[0]][v[1]-1] = 0;
                dir[v[0]][v[1]-1] = 3;
            }
            visit[v[0]][v[1]] = 0;
        }
        else if(v[0] == destination_r && v[1] == destination_c){
            clearInterval(timer);

            let cr = v[0];
            let cc = v[1];

            timer = setInterval(()=>{
                if(mp[cr][cc] == 1){
                    unlock();
                    clearInterval(timer);
                    return;
                }

                if(mp[cr][cc] != 2) mp[cr][cc] = 5;
                if(dir[cr][cc] == 0) cr--;
                else if(dir[cr][cc] == 1) cc--;
                else if(dir[cr][cc] == 2) cr++;      
                else if(dir[cr][cc] == 3) cc++;

            }, 30)

            mp[v[0]][v[1]] = 2;
            reset_req = true;
            return;
        }
        else if(visit[v[0]][v[1]] == 0){
            visit[v[0]][v[1]] = 0;
            mp[v[0]][v[1]] = 4;

            if(v[0]+1 >= 0 && v[0]+1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]+1][v[1]] > 1){
                stack.push([v[0]+1, v[1]]);
                visit[v[0]+1][v[1]] = 0;
                dir[v[0]+1][v[1]] = 0;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]+1 >= 0 && v[1]+1 <= COLS && visit[v[0]][v[1]+1] > 1){
                stack.push([v[0], v[1]+1]);
                visit[v[0]][v[1]+1] = 0;
                dir[v[0]][v[1]+1] = 1;
            }
            if(v[0]-1 >= 0 && v[0]-1 < ROWS && v[1] >= 0 && v[1] <= COLS && visit[v[0]-1][v[1]] > 1){
                stack.push([v[0]-1, v[1]]);
                visit[v[0]-1][v[1]] = 0;
                dir[v[0]-1][v[1]] = 2;
            }
            if(v[0] >= 0 && v[0] < ROWS && v[1]-1 >= 0 && v[1]-1 <= COLS && visit[v[0]][v[1]-1] > 1){
                stack.push([v[0], v[1]-1]);
                visit[v[0]][v[1]-1] = 0;
                dir[v[0]][v[1]-1] = 3;
            }
        }
    })
}