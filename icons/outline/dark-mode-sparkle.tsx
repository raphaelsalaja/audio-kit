import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DarkModeSparkle({
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
          d="m4,9c0,2.761,2.239,5,5,5V4c-2.761,0-5,2.239-5,5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.0217,1.751c-.0073,0-.0144-.001-.0217-.001C4.9959,1.75,1.75,4.9958,1.75,9s3.2459,7.25,7.25,7.25,7.25-3.2461,7.25-7.25c0-.0073-.0011-.0142-.0011-.0215"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m17.4873,3.0381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DarkModeSparkle;
