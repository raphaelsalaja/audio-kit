import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Material2({
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
          d="M8.439,2h-3.689c-1.517,0-2.75,1.233-2.75,2.75v3.689L8.439,2Z"
          fill={fill}
        />
        <path
          d="M2,10.561v2.689c0,.485,.137,.935,.358,1.331L14.581,2.358c-.396-.221-.846-.358-1.331-.358h-2.689L2,10.561Z"
          fill={secondaryfill}
        />
        <path
          d="M16,7.439v-2.689c0-.485-.137-.935-.358-1.331L3.419,15.642c.396,.221,.846,.358,1.331,.358h2.689L16,7.439Z"
          fill={fill}
        />
        <path
          d="M9.561,16h3.689c1.517,0,2.75-1.233,2.75-2.75v-3.689l-6.439,6.439Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Material2;
