/**
 Explanation:

If we go from start page 1 takes 0; page 2,3 takes 1; page 4,5 takes 2 and so on. So for 2k,2k+1 we require k turns. Hence p=2k,2k+1⟹⌊p/2⌋=k
If we go from the back it depends on:

If n is odd then n,n−1 take 0; n−2,n−3 takes 1 and so on. So n−2k,n−(2k+1) takes k.

Let n=2q+1 then p=2q−2k+1,2q−2k⟹⌊p/2⌋=q−k

i.e. k=q−⌊p/2⌋=⌊n/2⌋−⌊p/2⌋
If n is even then n takes 0; n−1,n−2 takes 1 and so on. So n−(2k−1),n−2k takes k.

Let n=2q then p=2q−2k,2q−2k+1⟹⌊p/2⌋=q−k
i.e. k=q−⌊p/2⌋=⌊n/2⌋−⌊p/2⌋ 
 */

function pageCount(n, p){
    const turnFrmFront = Math.floor(p/2);
    const turnFrmBack = Math.floor((n/2)-turnFrmFront);
    return Math.min(turnFrmFront, turnFrmBack);

}

console.log(pageCount(6,2));