import React, { Component } from 'react';

/**
 * 연동 로그인 아이콘
 * @returns 
 */

function AuthLogo (props){
     const {logoDivName, logoHref, logoSrc, logoAlt, logoClassName} =  props
     return( 
     <a
        href={logoHref}
     >
          <div
             className={logoDivName}
          >
              
                    <img 
                         src = {logoSrc}
                         alt = {logoAlt}
                         className={logoClassName}
                    />
               
          </div>
     </a>
     );
}

export default AuthLogo;