import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextASparkle({
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
          d="M14.25,16c-.301,0-.584-.182-.699-.479l-1.172-3.021H5.107c-.247,0-.479-.122-.619-.326s-.17-.464-.08-.695L7.899,2.479c.112-.289,.39-.479,.699-.479h.803c.31,0,.587,.19,.699,.479l3.482,8.978c.006,.015,.012,.03,.018,.045l1.349,3.478c.149,.386-.042,.82-.428,.97-.09,.035-.181,.051-.271,.051ZM6.203,11h5.594l-2.797-7.211-2.797,7.211Z"
          fill={fill}
        />
        <path
          d="M15.493,1.492l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316,.947-.946,.315c-.153,.051-.257,.194-.257,.356s.104,.305,.257,.356l.946,.315,.316,.947c.051,.153,.194,.256,.355,.256s.305-.104,.355-.256l.316-.947,.946-.315c.153-.051,.257-.194,.257-.356s-.104-.305-.257-.356Z"
          fill={secondaryfill}
        />
        <path
          d="M4.658,13.526l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474Z"
          fill={secondaryfill}
        />
        <circle cx="2.75" cy="5.25" fill={secondaryfill} r=".75" />
      </g>
    </svg>
  );
}

export default TextASparkle;
