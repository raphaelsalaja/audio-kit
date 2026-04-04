import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenDrawSparkle({
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
          d="m7.25,11.25l3.1585-1.2238,3.5458-5.1166c.529-.776.329-1.835-.447-2.364h0c-.776-.529-1.835-.329-2.364.447l-3.5458,5.1166-.3475,3.1407Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.25,11.25l3.1585-1.2238,3.5458-5.1166c.529-.776.329-1.835-.447-2.364h0c-.776-.529-1.835-.329-2.364.447l-3.5458,5.1166-.3475,3.1407Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.7842,8.6896c.3143,2.9363,2.7396,5.7099,5.2158,6.8104"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10,13.5c1.2917.8542,4.9506,1.8375,5.9375-1,.9186-2.641-.6409-5.193-2.4806-6.8569"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.589,3.9055l-1.515-.5096-.505-1.5258c-.164-.4935-.975-.4935-1.139,0l-.505,1.5258-1.515.5096c-.245.0816-.41.3132-.41.5731s.165.4915.41.5731l1.515.5096.505,1.5258c.082.2467.312.4129.57.4129s.487-.1662.57-.4129l.505-1.5258,1.515-.5096c.245-.0816.41-.3132.41-.5731s-.166-.4905-.411-.5731Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PenDrawSparkle;
