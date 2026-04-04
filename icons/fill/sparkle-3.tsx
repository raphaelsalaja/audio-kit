import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sparkle3({
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
          d="M3.025,5.623c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263Z"
          fill={secondaryfill}
        />
        <path
          d="M16.525,8.803l-4.535-1.793-1.793-4.535c-.227-.572-1.168-.572-1.395,0l-1.793,4.535-4.535,1.793c-.286,.113-.475,.39-.475,.697s.188,.584,.475,.697l4.535,1.793,1.793,4.535c.113,.286,.39,.474,.697,.474s.584-.188,.697-.474l1.793-4.535,4.535-1.793c.286-.113,.475-.39,.475-.697s-.188-.584-.475-.697Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sparkle3;
