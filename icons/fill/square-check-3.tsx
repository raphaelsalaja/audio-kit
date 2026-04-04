import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCheck3({
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
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-.303,4.641c-1.859,1.382-3.435,3.29-4.683,5.669-.129,.247-.385,.402-.664,.402h-.003c-.28,0-.536-.158-.664-.407-.575-1.117-1.218-2.025-1.965-2.776-.292-.293-.291-.769,.003-1.061,.293-.292,.769-.292,1.061,.003,.573,.576,1.09,1.228,1.563,1.972,1.239-2.045,2.734-3.726,4.458-5.007,.332-.246,.802-.178,1.049,.155,.247,.332,.178,.802-.155,1.049Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareCheck3;
