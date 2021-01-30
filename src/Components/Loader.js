import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';

const Loader = () => {
    return (
 <>
  <SkeletonTheme color="#aaa" highlightColor="#444" duration={3}>
<Skeleton count={1} width="200px" height="150px" />
</SkeletonTheme>
<SkeletonTheme color="#aaa" highlightColor="" duration={0.5}>
<div className="loader-text">
             <Skeleton count={1} width="100%" height="300px" />
                  <Skeleton count={1} width="70%" /><br />
                  <Skeleton count={1} width="50%" />
                </div>
                </SkeletonTheme>
              </>
            );
          };
          
 export default Loader;

