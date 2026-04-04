import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDress({
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
        <circle
          cx="9.001"
          cy="2.5"
          fill="none"
          r="1.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.076,13.617l-1.659-6.014c-.105-.382-.421-.664-.812-.726-.469-.073-1.008-.125-1.604-.125-.45,0-.99,.029-1.594,.123-.392,.061-.717,.344-.822,.726l-1.659,6.014c-.088,.318,.152,.633,.482,.633h1.593s.174,2.083,.174,2.083c.043,.518,.476,.917,.997,.917h1.66c.52,0,.953-.399,.997-.917l.174-2.083h1.593c.33,0,.57-.315,.482-.633Z"
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

export default PersonDress;
