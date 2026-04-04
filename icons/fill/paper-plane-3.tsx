import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane3({
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
          d="M16.078,13.649L10.124,2.183c-.219-.421-.649-.683-1.124-.683s-.905,.262-1.124,.683L1.922,13.649c-.234,.452-.177,.997,.147,1.389,.245,.297,.604,.461,.977,.461,.12,0,.241-.017,.36-.052l4.844-1.435v-4.898c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.898l4.844,1.435c.489,.146,1.013-.016,1.337-.409,.324-.392,.382-.938,.147-1.389Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperPlane3;
