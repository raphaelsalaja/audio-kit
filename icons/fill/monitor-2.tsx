import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Monitor2({
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
          d="m9.237,10.539c-.826-.275-1.656-.442-2.487-.506v-1.783c0-.414-.336-.75-.75-.75s-.75.336-.75.75v1.783c-.831.064-1.661.231-2.487.506-.393.131-.605.556-.475.949.132.392.551.606.949.474,1.832-.61,3.693-.61,5.525,0,.079.026.159.039.237.039.314,0,.606-.199.712-.513.131-.393-.082-.818-.475-.949Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <rect
          height="9"
          width="12"
          fill={fill}
          rx="2.75"
          ry="2.75"
          strokeWidth="0"
          y="0"
        />
      </g>
    </svg>
  );
}

export default Monitor2;
