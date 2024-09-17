/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let mpp={};
    let ans=[];
    let str1=s1.split(" ");
    let str2=s2.split(" ")

    for(let i=0;i<str1.length;i++)
    {   if(!mpp[str1[i]])
            {
                mpp[str1[i]]=0;
            }
        mpp[str1[i]]++;
    }
     for(let i=0;i<str2.length;i++)
    {   if(!mpp[str2[i]])
            {
                mpp[str2[i]]=0;
            }
        mpp[str2[i]]++;
    }
    for(let keys in mpp)
    { 
        if(mpp[keys]==1)
        {   
            ans.push(keys);
        }
    }
    return ans;
};
