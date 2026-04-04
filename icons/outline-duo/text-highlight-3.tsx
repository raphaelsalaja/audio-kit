import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextHighlight3({
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
          d="m11.1408,2.6519l-4.2955,4.2957c-.3075.3075-.5064.7069-.5665,1.1376l-.1508,1.0799-1.4708,1.4708c-.1952.1952-.1953.5118,0,.707l2.5012,2.5022c.1953.1953.5119.1954.7072,0l1.4648-1.4649,1.09-.1558c.4284-.0612.8254-.2597,1.1313-.5657l4.2975-4.2978c.5857-.5857.5857-1.5353.0001-2.1211l-2.5873-2.588c-.5857-.5859-1.5354-.5859-2.1212-.0001Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5.3813,15.1196l-2-2c-.1953-.1953-.5117-.1953-.707,0l-1.5269,1.5269c-.123.123-.1733.3018-.1323.4712.041.1689.167.3052.333.3584l3.0269.9731c.0498.0161.1016.0239.1528.0239.1304,0,.2583-.0513.3535-.1465l.5-.5c.1953-.1953.1953-.5117,0-.707Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.56,3.941l-4.118,4.118"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.1408,2.6519l-4.2955,4.2957c-.3075.3075-.5064.7069-.5665,1.1376l-.1508,1.0799-1.4708,1.4708c-.1952.1952-.1953.5118,0,.707l2.5012,2.5022c.1953.1953.5119.1954.7072,0l1.4648-1.4649,1.09-.1558c.4284-.0612.8254-.2597,1.1313-.5657l4.2975-4.2978c.5857-.5857.5857-1.5353.0001-2.1211l-2.5873-2.588c-.5857-.5859-1.5354-.5859-2.1212-.0001Z"
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

export default TextHighlight3;
