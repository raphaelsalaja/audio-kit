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
          d="m5.3813,15.1196l-2-2c-.1953-.1953-.5117-.1953-.707,0l-1.5269,1.5269c-.123.123-.1733.3018-.1323.4712.041.1689.167.3052.333.3584l3.0269.9731c.0498.0161.1016.0239.1528.0239.1304,0,.2583-.0513.3535-.1465l.5-.5c.1953-.1953.1953-.5117,0-.707Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.6158,3.9456l-4.6431,4.6438c-.1465.1465-.3379.2197-.5303.2197s-.3838-.0732-.5303-.2197c-.293-.293-.293-.7676,0-1.0605l4.6433-4.644-.7625-.7627c-.8496-.8501-2.333-.8521-3.1826-.0005l-4.2949,4.2954c-.4199.4199-.6973.9751-.7803,1.5645l-.1152.8311-1.293,1.293c-.4873.4873-.4873,1.2803,0,1.7676l2.501,2.5024c.2432.2437.5635.3657.8838.3657s.6406-.1221.8838-.3657l1.2881-1.2881.8418-.1201c.5859-.0835,1.1396-.3599,1.5566-.7783l4.2988-4.2979c.875-.8774.875-2.3042-.001-3.1812l-.7641-.7644Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TextHighlight3;
