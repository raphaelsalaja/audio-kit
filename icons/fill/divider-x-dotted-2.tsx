import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerXDotted2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <circle cx="6" cy="1.75" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle
          cx="6"
          cy="4.583"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="6"
          cy="7.417"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="6"
          cy="10.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <path
          d="m1.938.595c-.225-.058-.464-.009-.647.133-.184.142-.291.361-.291.593v9.358c0,.232.107.451.291.593.133.103.295.157.459.157.062,0,.126-.008.188-.024,1.214-.314,2.062-1.406,2.062-2.655V3.25c0-1.249-.848-2.341-2.062-2.655Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.709.728c-.184-.142-.421-.192-.647-.133-1.214.314-2.062,1.406-2.062,2.655v5.5c0,1.249.848,2.341,2.062,2.655.062.016.126.024.188.024.164,0,.326-.054.459-.157.184-.142.291-.361.291-.593V1.321c0-.232-.107-.451-.291-.593Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DividerXDotted2;
