import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NavigationVertical({
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
        <rect
          height="4.5"
          width="4.5"
          fill={fill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="2"
          y="6.75"
        />
        <path
          d="m5,1h-1.5c-.8271,0-1.5.6729-1.5,1.5v1.5c0,.8271.6729,1.5,1.5,1.5h1.5c.8271,0,1.5-.6729,1.5-1.5v-1.5c0-.8271-.6729-1.5-1.5-1.5Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m5,12.5h-1.5c-.8271,0-1.5.6729-1.5,1.5v1.5c0,.8271.6729,1.5,1.5,1.5h1.5c.8271,0,1.5-.6729,1.5-1.5v-1.5c0-.8271-.6729-1.5-1.5-1.5Zm-1.501,1.5"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.2954,8.5698l-6.854-2.5039c-.3955-.1436-.8281-.0493-1.1265.249s-.3936.73-.249,1.1265l2.5039,6.854c.1548.4238.5581.7046,1.0078.7046.0073,0,.0146,0,.022-.0005.4585-.0093.8604-.3091,1-.7456l.8857-2.7686,2.7686-.8857c.4365-.1396.7363-.5415.7456-1s-.2734-.8721-.7041-1.0298Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default NavigationVertical;
