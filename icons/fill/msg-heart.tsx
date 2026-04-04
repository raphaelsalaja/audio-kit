import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgHeart({
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
          d="M8.5,12.972c-.007-2.038,1.643-3.71,3.677-3.722,.655,.008,1.278,.181,1.821,.491,.54-.309,1.156-.482,1.796-.491,.417,.002,.809,.088,1.182,.216,.009-.155,.024-.308,.024-.466,0-4.411-3.589-8-8-8S1,4.589,1,9c0,1.396,.371,2.776,1.062,3.971,.238,.446-.095,2.002-.842,2.749-.209,.209-.276,.522-.17,.798,.106,.276,.365,.465,.66,.481,.079,.004,.16,.006,.241,.006,1.145,0,2.535-.407,3.44-.871,.675,.343,1.39,.587,2.131,.728,.484,.092,.982,.138,1.478,.138,.36,0,.712-.032,1.06-.079-.864-1.011-1.56-2.327-1.56-3.949Z"
          fill={fill}
        />
        <path
          d="M13.731,17.933c.17,.089,.368,.089,.538,0,.897-.472,3.731-2.181,3.731-4.961,.004-1.221-.974-2.215-2.187-2.222-.73,.009-1.408,.38-1.813,.991-.405-.611-1.084-.981-1.813-.991-1.213,.007-2.191,1.002-2.187,2.222,0,2.78,2.834,4.489,3.731,4.961Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MsgHeart;
