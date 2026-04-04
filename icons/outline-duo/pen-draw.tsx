import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenDraw({
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
          d="m10.5646,3.3133c-2.5998-1.0613-6.5231-1.5076-8.1896,1.6867-2.0305,3.8918,1.25,8.5,4.625,10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10,13c1.2917.8542,4.9506,1.8375,5.9375-1,.9186-2.641-.6409-5.193-2.4806-6.8569"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.25,10.75l3.1585-1.2238,3.5458-5.1166c.529-.776.329-1.835-.447-2.364h0c-.776-.529-1.835-.329-2.364.447l-3.5458,5.1166-.3475,3.1407Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.25,10.75l3.1585-1.2238,3.5458-5.1166c.529-.776.329-1.835-.447-2.364h0c-.776-.529-1.835-.329-2.364.447l-3.5458,5.1166-.3475,3.1407Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PenDraw;
