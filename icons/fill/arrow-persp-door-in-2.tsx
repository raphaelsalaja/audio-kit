import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowPerspDoorIn2({
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
        <path
          d="m10.81.673c-.441-.335-.997-.44-1.528-.293l-2.5.694c-.558.156-.987.576-1.175,1.1l2.235,2.235c.425.425.659.99.659,1.591s-.234,1.166-.659,1.591l-2.235,2.235c.188.524.618.945,1.175,1.1l2.501.694c.156.043.314.065.472.065.377,0,.745-.123,1.056-.358.438-.333.69-.841.69-1.393V2.065c0-.551-.252-1.059-.69-1.393Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.78,5.47l-2.5-2.5c-.293-.293-.768-.293-1.061,0s-.293.768,0,1.061l1.22,1.22H.75c-.414,0-.75.336-.75.75s.336.75.75.75h3.689l-1.22,1.22c-.293.293-.293.768,0,1.061.146.146.338.22.53.22s.384-.073.53-.22l2.5-2.5c.293-.293.293-.768,0-1.061Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowPerspDoorIn2;
