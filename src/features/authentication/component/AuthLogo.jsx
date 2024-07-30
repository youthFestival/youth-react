import React from 'react';

/**
 * 연동 로그인 아이콘
 * @returns 
 */

function AuthLogo (props){
     const {logoDivName, logoHref, logoSrc, logoAlt, logoClassName, onClick} =  props
     return( 
     <a
        href={logoHref}
        onClick={onClick}
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