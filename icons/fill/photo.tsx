import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Photo({
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
          d="M13.194,8.384c-1.072-1.072-2.816-1.072-3.889,0L3.067,14.623c.214,.078,.442,.127,.683,.127H14.25c1.105,0,2-.896,2-2v-1.311l-3.056-3.056Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,15.5H3.75c-1.517,0-2.75-1.233-2.75-2.75V5.25c0-1.517,1.233-2.75,2.75-2.75H14.25c1.517,0,2.75,1.233,2.75,2.75v7.5c0,1.517-1.233,2.75-2.75,2.75ZM3.75,4c-.689,0-1.25,.561-1.25,1.25v7.5c0,.689,.561,1.25,1.25,1.25H14.25c.689,0,1.25-.561,1.25-1.25V5.25c0-.689-.561-1.25-1.25-1.25H3.75Z"
          fill={fill}
        />
        <circle cx="5.75" cy="7.25" fill={secondaryfill} r="1.25" />
      </g>
    </svg>
  );
}

export default Photo;
