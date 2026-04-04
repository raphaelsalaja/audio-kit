import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Check({
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
          d="m17.833,8.5291v-.0012l-3.95-4.8799c-.334-.4121-.83-.6479-1.36-.6479h-7.773c-1.517,0-2.75,1.2329-2.75,2.75v1.6462c.8637-.5647,1.8932-.8962,3-.8962,3.0327,0,5.5,2.4673,5.5,5.5,0,1.1067-.3315,2.1362-.8962,3h2.9193c.53,0,1.026-.2361,1.36-.6489l3.95-4.8792c.223-.2749.223-.668,0-.9429Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5,8c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Label2Check;
