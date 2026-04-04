import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelMinus({
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
          d="m8.329,2.358l-3.921,3.547c-.419.379-.658.918-.658,1.483v6.862c0,1.105.895,2,2,2h6.5c.8397,0,1.4653-.3192,1.7618-1.0523l-.4353-.1977h-1.8265c-1.2426,0-2.25-1.0074-2.25-2.25s1.0074-2.25,2.25-2.25h2.5v-3.112c0-.565-.239-1.104-.658-1.483l-3.921-3.547c-.381-.345-.961-.345-1.342,0Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,8c.6904,0,1.25-.5596,1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25,1.25.5596,1.25,1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.75,12.75h-5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.25,9.75v-2.7117c0-.5649-.239-1.104-.658-1.4829l-3.921-3.5471c-.381-.345-.961-.345-1.342,0l-3.921,3.5471c-.419.3789-.658.918-.658,1.4829v7.2117c0,1.105.895,2,2,2h6.5c.504,0,.959-.1926,1.3106-.5"
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

export default LabelMinus;
