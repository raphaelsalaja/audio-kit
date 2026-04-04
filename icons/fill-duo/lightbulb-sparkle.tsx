import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LightbulbSparkle({
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
          d="m7.7686,1.1288c3.7065-.7741,6.9814,2.0411,6.9814,5.6211,0,2.0774-1.1037,3.8914-2.75,4.9006v1.3494h-6v-1.3495c-1.9324-1.1854-3.1084-3.4799-2.6498-5.9894l.0003-.0016c.4148-2.2417,2.2437-4.0765,4.4181-4.5307Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12,13v1.25c0,1.5192-1.2308,2.75-2.75,2.75h-.5c-1.5192,0-2.75-1.2308-2.75-2.75v-1.25h6Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.8745,9.75c-.1108,0-.2236-.0244-.3291-.0762-.3374-.165-.501-.5547-.3818-.9111l.4209-1.2627h-.9595c-.2764,0-.5308-.1523-.6611-.396-.1309-.2441-.1162-.54.0371-.77l1.5-2.25c.208-.3125.6162-.4238.9536-.2578.3374.165.501.5547.3818.9111l-.4209,1.2627h.9595c.2764,0,.5308.1523.6611.396.1309.2441.1162.54-.0371.77l-1.5,2.25c-.1431.2148-.3804.334-.6245.334Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default LightbulbSparkle;
