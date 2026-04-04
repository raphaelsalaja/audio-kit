import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartPie3({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M22 18.6794L20.5 20.1794L19 20.8223V9.92944L20 9.67944L22 7.67944V18.6794Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M22 7V18C22 20.1421 17.7906 21.8909 12.5001 21.9951C12.224 22.0005 12 21.7761 12 21.5V19M2 7V17.5C2 17.7761 2.22386 18 2.5 18H12"
          stroke={fill}
        />
        <path d="M12 21V7.5C12 7.22386 11.7761 7 11.5 7H2" stroke={fill} />
        <path
          d="M2 7C2 4.79086 6.47715 3 12 3C17.5228 3 22 4.79086 22 7C22 9.20914 17.5228 11 12 11"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default ChartPie3;
