import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Blog({
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
          d="m17.3653,10.2325l-.3354-.3354c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2,3.75c0-1.5192,1.2308-2.75,2.75-2.75h8c1.5192,0,2.75,1.2308,2.75,2.75v4.1638c-.7369.0644-1.4543.3718-2.0047.9209l-3.1624,3.1623c-.2414.2414-.4245.5343-.5358.8565l-.9209,2.6709c-.1101.319-.145.6519-.11.9756h-4.0162c-1.5192,0-2.75-1.2308-2.75-2.75V3.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m5,5.75c0-.4142.3358-.75.75-.75h6c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-6c-.4142,0-.75-.3358-.75-.75Zm.75,2.25c-.4142,0-.75.3358-.75.75s.3358.75.75.75h6c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75h-6Zm-.75,3.75c0-.4142.3358-.75.75-.75h2.5c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-2.5c-.4142,0-.75-.3358-.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Blog;
