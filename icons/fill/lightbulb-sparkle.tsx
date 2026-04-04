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
          d="m12.626,2.2861h-.001c-1.351-1.0981-3.121-1.519-4.856-1.1582-2.2271.4651-4.002,2.2861-4.4171,4.531-.444,2.3992.612,4.75,2.649,5.9919v2.5991c0,1.5171,1.2339,2.75,2.75,2.75h.5c1.517,0,2.75-1.2329,2.75-2.75v-2.5991c1.708-1.042,2.75-2.8799,2.75-4.9009,0-1.739-.775-3.366-2.125-4.4639Zm-2.126,11.9639c0,.689-.561,1.25-1.25,1.25h-.5c-.689,0-1.25-.561-1.25-1.25v-1.25h3v1.25Zm.499-7.084l-1.5,2.25c-.1431.2148-.3804.334-.6245.334-.1108,0-.2236-.0244-.3291-.0762-.3374-.165-.501-.5547-.3818-.9111l.4209-1.2627h-.9595c-.2764,0-.5308-.1523-.6611-.396-.1309-.2441-.1162-.54.0371-.77l1.5-2.25c.208-.3125.6162-.4238.9536-.2578.3374.165.501.5547.3818.9111l-.4209,1.2627h.9595c.2764,0,.5308.1523.6611.396.1309.2441.1162.54-.0371.77Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default LightbulbSparkle;
