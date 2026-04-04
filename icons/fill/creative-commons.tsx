import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreativeCommons({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-2,9.5c.235,0,.459-.052,.665-.155,.37-.184,.821-.034,1.006,.337,.186,.371,.034,.821-.336,1.006-.411,.205-.872,.312-1.335,.312-1.654,0-3-1.346-3-3s1.346-3,3-3c.463,0,.924,.108,1.335,.312,.37,.185,.521,.635,.336,1.006-.184,.371-.635,.521-1.006,.337-.206-.103-.43-.155-.665-.155-.827,0-1.5,.673-1.5,1.5s.673,1.5,1.5,1.5Zm5,0c.235,0,.459-.052,.665-.155,.37-.184,.821-.034,1.006,.337,.186,.371,.034,.821-.336,1.006-.411,.205-.872,.312-1.335,.312-1.654,0-3-1.346-3-3s1.346-3,3-3c.463,0,.924,.108,1.335,.312,.37,.185,.521,.635,.336,1.006-.184,.371-.635,.521-1.006,.337-.206-.103-.43-.155-.665-.155-.827,0-1.5,.673-1.5,1.5s.673,1.5,1.5,1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CreativeCommons;
