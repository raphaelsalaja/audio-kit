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
          d="m14.25,9c-.9707,0-1.8281-.6187-2.1348-1.5396l-.3936-1.1816-1.1826-.3936c-.9219-.3091-1.5391-1.167-1.5391-2.1353,0-.5751.2199-1.1083.5903-1.5118.1411-.1537-.2239-.4882-.5903-.4882C4.9959,1.75,1.75,4.9958,1.75,9s3.2459,7.25,7.25,7.25,7.25-3.2461,7.25-7.25c0-.3665-.3623-.698-.5361-.5472-.3969.3443-.9107.5472-1.4639.5472Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
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
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DarkModeSparkle;
