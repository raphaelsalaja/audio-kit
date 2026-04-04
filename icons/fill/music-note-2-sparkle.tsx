import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNote2Sparkle({
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
          d="M14.908,6.359c.199-.364,.064-.819-.299-1.018-2.539-1.385-4.21-3.969-4.227-3.995-.18-.281-.521-.41-.843-.316-.319,.094-.54,.387-.54,.72V10.269c-.629-.476-1.403-.769-2.25-.769-2.068,0-3.75,1.682-3.75,3.75s1.682,3.75,3.75,3.75,3.75-1.682,3.75-3.75V3.915c.82,.903,1.977,1.972,3.391,2.743,.363,.198,.82,.065,1.018-.299Z"
          fill={fill}
        />
        <path
          d="M3.23,8.217l.316-.947,.946-.315c.153-.051,.257-.194,.257-.356s-.104-.305-.257-.356l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316,.947-.946,.315c-.153,.051-.257,.194-.257,.356s.104,.305,.257,.356l.946,.315,.316,.947c.051,.153,.194,.256,.355,.256s.305-.104,.355-.256Z"
          fill={secondaryfill}
        />
        <path
          d="M16.658,10.99l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474Z"
          fill={secondaryfill}
        />
        <circle cx="5.25" cy="2.75" fill={secondaryfill} r=".75" />
      </g>
    </svg>
  );
}

export default MusicNote2Sparkle;
