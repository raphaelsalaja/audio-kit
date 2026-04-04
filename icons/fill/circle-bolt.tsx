import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleBolt({
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
          d="m9,1C4.5889,1,1,4.5889,1,9s3.5889,8,8,8,8-3.5889,8-8S13.4111,1,9,1Zm3.3208,8.1748l-3.2656,4.75c-.1436.2085-.3774.3252-.6187.3252-.0967,0-.1948-.0186-.2886-.0581-.3276-.1367-.5142-.4844-.4478-.833l.6426-3.3589h-2.0454c-.2783,0-.5342-.1543-.6636-.4009-.1299-.2466-.1123-.5444.0454-.7739l3.2656-4.75c.2007-.292.5786-.4067.9072-.2671.3276.1367.5142.4844.4478.8325l-.6426,3.3594h2.0454c.2783,0,.5342.1543.6636.4009.1299.2466.1123.5444-.0454.7739Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleBolt;
