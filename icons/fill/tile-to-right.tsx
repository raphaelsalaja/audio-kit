import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToRight({
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
          d="M14.25,2.5H3.75c-1.517,0-2.75,1.233-2.75,2.75v7.5c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V5.25c0-1.517-1.233-2.75-2.75-2.75Zm-4.47,7.03l-2,2c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l.72-.72H3.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.439l-.72-.72c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2,2c.293,.293,.293,.768,0,1.061Zm5.72,3.22c0,.69-.56,1.25-1.25,1.25h-2c-.69,0-1.25-.56-1.25-1.25V5.25c0-.69,.56-1.25,1.25-1.25h2c.69,0,1.25,.56,1.25,1.25v7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TileToRight;
