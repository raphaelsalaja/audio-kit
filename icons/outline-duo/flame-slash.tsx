import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlameSlash({
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
          d="m12.4301,5.5699c-1.5594-2.19-3.4301-3.8199-3.4301-3.8199,0,0-5.5,4.792-5.5,8.983,0,1.0761.307,2.0801.8381,2.9289l3.7769-3.7769c.4861-.5364.8782-.879.885-.8849,0,0,0,0,0,0l3.4301-3.4301Zm1.0459,2.1361l-2.9449,2.9628c.6331.8312,1.2189,1.8518,1.2189,2.8223,0,1.524-1.231,2.759-2.75,2.759-1.0988,0-2.0469-.6462-2.4874-1.5807l-.6179.618c.8836.6074,1.9531.9627,3.1053.9627,3.038,0,5.5-2.47,5.5-5.517,0-1.0522-.5047-1.9843-1.024-3.027Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m12.43,5.57c-1.559-2.19-3.43-3.82-3.43-3.82,0,0-5.5,4.792-5.5,8.983,0,1.076.307,2.08.838,2.929"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2,16L16,2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,16.25c1.519,0,2.75-1.235,2.75-2.759,0-.7398-.3425-1.5167-.7858-2.2129"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.5622,15.6802c.7346.3649,1.5624.5698,2.4378.5698,3.038,0,5.5-2.47,5.5-5.517,0-.8086-.2048-1.64-.5356-2.4551"
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

export default FlameSlash;
